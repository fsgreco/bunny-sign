# 🐰 Animated bunny sign for your terminal

This package lets you display animated messages with an adorable bunny holding a sign. Because why not?

```
 |￣￣￣￣￣￣￣￣￣￣￣|
    Hey, kids!
    don't you want 
    a bunny for your 
    terminal?
 |＿＿＿＿＿＿＿＿＿＿＿|
   (\__/) ||
   (•ㅅ•) ||
   /    づ
```

## What is this madness?

Ever wished your terminal could be 44% cuter?  
Tired of boring `console.log` messages that lack ears and whiskers? 

Here you have:

[![asciicast](https://asciinema.org/a/PysYe4p2XqnyO7eI0YeYFYEH1.svg)](https://asciinema.org/a/PysYe4p2XqnyO7eI0YeYFYEH1)

### It features

- 🐰 An adorable bunny (obviously)
- 🎭 Different eye and mouth styles that randomly animate as your message appears
- 📝 Automatic text wrapping for longer messages
- 🪟 Windows-friendly ASCII mode

### Use Cases

- Announce important messages with the gravitas that only a bunny can provide
- Improve the mood of developers reviewing your logs
- Make your CI/CD pipelines inexplicably delightful (Never tried it. I don't feel responsible for this advice)
- Just a new funny way to waste time on your terminal

## Usage

### Command Line

```bash
# Show a simple message
npx bunny-sign "Hello, World!"

# Multiple messages
npx bunny-sign "First message" "Second message"

# Clear the bunny with -c (doesn't keep the last message after running)
npx bunny-sign -c "This message will not last"
```

Optionally you can install it globally and avoid the `npx` on the commands above.
```bash
npm install -g bunny-sign
```

### In Your Code
You can use it on your code for your own logs or CLI messages:

```bash
npm install bunny-sign
```

Import `showBunnySign` and pass a single phrase or an array of them.

```javascript
import { showBunnySign } from 'bunny-sign';

// Show a message with a bunny
await showBunnySign('Hello from JavaScript!');

// Show multiple messages in sequence
await showBunnySign(['First message', 'Then this one', 'And finally this']);

// Keep the bunny after finishing (by default it will clear it)
await showBunnySign('I will stay here', { persist: true });
```

## Contributing

Pull requests are welcome! Just ensure no bunnies are harmed during the process. You can find tests in place, simply run `npm test` before doing a pull request.

## License

MIT 

---

*Made with ❤️ and questionable life choices by fsgreco*