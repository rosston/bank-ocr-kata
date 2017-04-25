Working through the [Bank OCR Kata](https://github.com/testdouble/contributing-tests/wiki/Bank-OCR-kata).

After cloning the repo (requires Node >= 6), run the following:
```
npm install
npm test
./bin/bank-ocr-kata <path_to_ocr_file>
```

* User Story 1 is complete.
* User Story 2 is partially done. The core logic/tests of the account number
  validation are done. `bin/bank-ocr-kata` just needs to be updated to use the
  account number validator and print "ERR" next to invalid account numbers.
* User Story 3 is not started. I suspect that the interface for
  `parseNumberLine` can stay the same and simply return question marks in the
  string as markers for illegibility. Then `bin/bank-ocr-kata` would need to be
  updated to check for question marks in the strings and print "ILL" next to
  them.
* _Interlude_: By this time, `bin/bank-ocr-kata` is starting to have a bit more
  logic in it (checking/printing statuses). It'd probably make sense to break
  the core of it out into a different function that returns an array of objects
  with the numbers and their statuses. Then `bin/bank-ocr-kata` can just be
  a matter of formatting data.
* User Story 4 is not started. Another function/test should be added for
  guessing valid account numbers. Probably that function would return an array
  of guesses for a given account number. And the logic for when to guess and
  for picking a single guess vs displaying the guesses would go in the
  higher-level CLI function.

  I think implementing the account number guesser will require knowing which
  pipes and underscores _could be_ added to any given digit. I'm not sure how
  to figure that out at runtime. (Perhaps simply go through each space
  character in the string of the digit and try putting a pipe or underscore in
  there?) Once that's figured out though, I think it's mostly just a matter of
  going through each digit, trying to make one change at a time, and validating
  the resulting account number.
