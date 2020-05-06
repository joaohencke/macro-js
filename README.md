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

