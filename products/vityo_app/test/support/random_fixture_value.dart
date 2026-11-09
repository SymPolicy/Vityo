import 'dart:math';

final _random = Random.secure();

/// Generates an unpredictable marker value for tests that need
/// credential-shaped input without committing secret material.
String randomFixtureValue(String label) => '$label-${randomFixtureTail(24)}';

/// Random lowercase-hex tail of [length] characters.
String randomFixtureTail(int length) => List.generate(
  length,
  (_) => '0123456789abcdef'[_random.nextInt(16)],
).join();
