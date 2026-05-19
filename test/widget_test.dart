import 'package:flutter_test/flutter_test.dart';
import 'package:marketplace_mobile_app/main.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  testWidgets('shows login page by default', (WidgetTester tester) async {
    SharedPreferences.setMockInitialValues(<String, Object>{});

    await tester.pumpWidget(const MyApp());
    await tester.pumpAndSettle();

    expect(find.text('登录 AI 购物中心'), findsOneWidget);
    expect(find.text('登录'), findsOneWidget);
  });
}
