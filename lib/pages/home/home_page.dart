import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  // 必须实现的方法：创建对应的State对象
  @override
  State<HomePage> createState() => _HomePageState();
}

// 真正的状态和UI逻辑写在这个State类中
class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('AI购物中心')),
      body: const Center(child: Text('欢迎使用flutter')),
    ); // 这里添加了分号
  }
}