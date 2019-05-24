import 'package:flutter/material.dart';
import 'package:usersapp/src/pages/home_page.dart';

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
      title: 'Consumir API',
    );
  }

}