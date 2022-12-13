# simpleencrypt
This encryption is based on adding unicode char codes together. The logic is simple but effective.

# Syntax
Encryption
```ec(value, key);```

```ec("test value", "secret") -> "çÊÖæêÔÑØ×"```

Decryption
```dc(value, key);```

```dc("çÊÖæêÔÑØ×", "secret") -> "test value"```

