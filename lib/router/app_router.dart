import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:marketplace_mobile_app/auth/auth_controller.dart';
import 'package:marketplace_mobile_app/pages/home/home_page.dart';
import 'package:marketplace_mobile_app/pages/login/login_page.dart';
import 'package:marketplace_mobile_app/pages/mine/mine_page.dart';

class AppRoutes {
  static const String login = '/login';
  static const String home = '/home';
  static const String mine = '/mine';
}

class AppTabItem {
  const AppTabItem({
    required this.label,
    required this.icon,
    required this.location,
  });

  final String label;
  final IconData icon;
  final String location;
}

const List<AppTabItem> _tabs = <AppTabItem>[
  AppTabItem(label: '首页', icon: Icons.home_outlined, location: AppRoutes.home),
  AppTabItem(label: '我的', icon: Icons.person_outline, location: AppRoutes.mine),
];

class AppRouter {
  AppRouter._();

  static final GoRouter router = GoRouter(
    initialLocation: AppRoutes.home,
    refreshListenable: AuthController.instance,
    redirect: (BuildContext context, GoRouterState state) {
      final bool loggedIn = AuthController.instance.isLoggedIn;
      final bool goingToLogin = state.matchedLocation == AppRoutes.login;

      if (!loggedIn && !goingToLogin) {
        return AppRoutes.login;
      }

      if (loggedIn && goingToLogin) {
        return AppRoutes.home;
      }

      return null;
    },
    routes: <RouteBase>[
      GoRoute(
        path: AppRoutes.login,
        name: 'login',
        builder: (BuildContext context, GoRouterState state) {
          return const LoginPage();
        },
      ),
      StatefulShellRoute.indexedStack(
        builder:
            (
              BuildContext context,
              GoRouterState state,
              StatefulNavigationShell navigationShell,
            ) {
              return AppTabScaffold(
                navigationShell: navigationShell,
                tabs: _tabs,
              );
            },
        branches: <StatefulShellBranch>[
          StatefulShellBranch(
            routes: <RouteBase>[
              GoRoute(
                path: AppRoutes.home,
                name: 'home',
                builder: (BuildContext context, GoRouterState state) {
                  return const HomePage();
                },
              ),
            ],
          ),
          StatefulShellBranch(
            routes: <RouteBase>[
              GoRoute(
                path: AppRoutes.mine,
                name: 'mine',
                builder: (BuildContext context, GoRouterState state) {
                  return const MinePage();
                },
              ),
            ],
          ),
        ],
      ),
    ],
  );
}

class AppTabScaffold extends StatelessWidget {
  const AppTabScaffold({
    super.key,
    required this.navigationShell,
    required this.tabs,
  });

  final StatefulNavigationShell navigationShell;
  final List<AppTabItem> tabs;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: navigationShell,
      bottomNavigationBar: NavigationBar(
        selectedIndex: navigationShell.currentIndex,
        destinations: tabs
            .map(
              (AppTabItem tab) =>
                  NavigationDestination(icon: Icon(tab.icon), label: tab.label),
            )
            .toList(),
        onDestinationSelected: (int index) {
          navigationShell.goBranch(
            index,
            initialLocation: index == navigationShell.currentIndex,
          );
        },
      ),
    );
  }
}
