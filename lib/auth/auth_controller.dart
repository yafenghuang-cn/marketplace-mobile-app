import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

class AuthController extends ChangeNotifier {
  AuthController._();

  static final AuthController instance = AuthController._();

  static const String _tokenKey = 'auth_token';
  static const String _expiresAtKey = 'auth_token_expires_at';

  SharedPreferences? _preferences;
  String? _token;
  DateTime? _expiresAt;

  bool get isLoggedIn =>
      _token != null &&
      _expiresAt != null &&
      _expiresAt!.isAfter(DateTime.now());

  String? get token => isLoggedIn ? _token : null;
  DateTime? get expiresAt => isLoggedIn ? _expiresAt : null;

  Future<void> init() async {
    _preferences ??= await SharedPreferences.getInstance();
    _token = _preferences!.getString(_tokenKey);

    final rawExpiresAt = _preferences!.getString(_expiresAtKey);
    _expiresAt = rawExpiresAt == null ? null : DateTime.tryParse(rawExpiresAt);

    if (!isLoggedIn) {
      await _clearPersistedToken(notify: false);
    }
  }

  Future<void> login() async {
    _preferences ??= await SharedPreferences.getInstance();

    final token = 'mock_token_${DateTime.now().millisecondsSinceEpoch}';
    final expiresAt = DateTime.now().add(const Duration(days: 3));

    await _preferences!.setString(_tokenKey, token);
    await _preferences!.setString(_expiresAtKey, expiresAt.toIso8601String());

    _token = token;
    _expiresAt = expiresAt;
    notifyListeners();
  }

  Future<void> logout() async {
    await _clearPersistedToken();
  }

  Future<void> _clearPersistedToken({bool notify = true}) async {
    _preferences ??= await SharedPreferences.getInstance();
    await _preferences!.remove(_tokenKey);
    await _preferences!.remove(_expiresAtKey);

    _token = null;
    _expiresAt = null;

    if (notify) {
      notifyListeners();
    }
  }
}
