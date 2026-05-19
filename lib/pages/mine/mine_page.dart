import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:marketplace_mobile_app/auth/auth_controller.dart';
import 'package:marketplace_mobile_app/router/app_router.dart';

class MinePage extends StatefulWidget {
  const MinePage({super.key});

  @override
  State<MinePage> createState() => MinePageState();
}

class MinePageState extends State<MinePage> {
  bool _isSubmitting = false;

  Future<void> _handleLogout() async {
    setState(() {
      _isSubmitting = true;
    });

    try {
      await AuthController.instance.logout();
      if (!mounted) {
        return;
      }
      context.go(AppRoutes.login);
    } finally {
      if (mounted) {
        setState(() {
          _isSubmitting = false;
        });
      }
    }
  }

  String _formatDateTime(DateTime value) {
    String twoDigits(int number) => number.toString().padLeft(2, '0');
    return '${value.year}-'
        '${twoDigits(value.month)}-'
        '${twoDigits(value.day)} '
        '${twoDigits(value.hour)}:'
        '${twoDigits(value.minute)}:'
        '${twoDigits(value.second)}';
  }

  @override
  Widget build(BuildContext context) {
    final AuthController authController = AuthController.instance;

    return AnimatedBuilder(
      animation: authController,
      builder: (BuildContext context, Widget? child) {
        final DateTime? expiresAt = authController.expiresAt;
        final String expiresAtText = expiresAt == null
            ? '未登录'
            : _formatDateTime(expiresAt.toLocal());

        return Scaffold(
          appBar: AppBar(title: const Text('我的')),
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  const Text(
                    '我的页面',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    'Token 过期时间：$expiresAtText',
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 24),
                  FilledButton.icon(
                    onPressed: () => context.go(AppRoutes.home),
                    icon: const Icon(Icons.home_outlined),
                    label: const Text('回首页'),
                  ),
                  const SizedBox(height: 12),
                  FilledButton.tonalIcon(
                    onPressed: _isSubmitting ? null : _handleLogout,
                    icon: const Icon(Icons.logout),
                    label: Text(_isSubmitting ? '退出中...' : '退出登录'),
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
