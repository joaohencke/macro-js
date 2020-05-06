# Personal macro

Main purpose is: tibia rune maker

The lib consists into execute keyboard input into `selected window`.  

# Running
```bash
  git clone git@github.com:joaohencke/macro-js.git
  cd macro-js
  yarn
  cd packages/sample
  yarn start --command {COMMAND_SEQUENCE} --delimiter {DELIMITER}
```

# Single command
```bash
yarn start --command {F1}{WAITMS:1000}{F1}
```

# Multi command
```bash
yarn start --command '{F1}{WAITMS:1000}{F1}|{WAITMS:3000}{F2}{WAITMS:3000}{F2}' --delimiter '|'
```

# Avaiable commands
* Key tap https://robotjs.io/docs/syntax#keys
* {WAITMS} - wait for next command - time in milliseconds
* {DANCE} - only macOS support yet (easy to make work in others)
