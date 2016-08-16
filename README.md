# Poker Hand Evaluator

A poker hand evaluator built with [Angular2](https://angular.io/) and
[TypeScript 1.8](http://www.typescriptlang.org/). Its goal is to
evaluate any hand and output its poker rank.


>_Life, like poker has an element of risk. It shouldn't be avoided. It
>should be faced._
>
>-- [Edward Norton](http://www.brainyquote.com/quotes/quotes/e/edwardnort418306.html)



## Build

From the root directory of this app, run the command:

```
npm run-script build
```

_Additional scripts can be found in the package.json file in
the project root._

## Development server

From the root directory of this app, run the command:

```
npm run-script server-debug
```

This will start the
[webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
and automatically as changes are made to the source files.

## Running tests

From the root directory of this application, run the command:

```
npm run-script test
```

The [Karma](https://karma-runner.github.io/1.0/index.html) test runner
is used in conjuction with the [Mocha](https://mochajs.org/) test
framework and [Chai](http://chaijs.com/) assertion library.


## Coding guidelines

The naming and coding conventions use the
[TypeScript StyleGuide and Coding Conventions](https://basarat.gitbooks.io/typescript/content/docs/styleguide/styleguide.html) guide.

Important distinctions include:
 
- Interfaces use the suffix _Interface_.

## Next steps and lessons learned
- Consider building this tool from scratch using the
  [angular-cli](https://github.com/angular/angular-cli). This would at
  least make deployment to GitHub pages easier along with blueprints for creating components, services, classes, etc.
- Use json files to describe rank, suit, hand rankings. Here's an
  example describing the _Royal Flush_ hand ranking:
```json
[{		
	"name": "Royal Flush",	
	"rank": 1,	
	"formula": {	
		"isSequence": true,
		"isSameSuit": true,
		"sameTwoRank": 0,
		"sameThreeRank": 0,
		"sameFourRank": 0,
		"requiredCard": "Ace",
		"tieBreaker": ""
	}	
}]

```
or a command-driven approach:
```json
{		
	"name": "Royal Flush",	
	"rank": 1,	
	"requirements": [{	
		"name": "isSequence",
		"value": true
	}, {	
		"name": "isSameSuit",
		"value": true
	}, {	
		"name": "requiredCard",
		"value": "Ace"
	}]	
}]

```

## References
### Poker
- [Rules Of Poker Hand Rankings](http://www.cardplayer.com/rules-of-poker/hand-rankings)
- [Poker Hands Order](https://www.pokerstars.com/poker/games/rules/hand-rankings/)
- [List of poker hand categories](https://en.wikipedia.org/wiki/List_of_poker_hand_categories)
- [Poker card images](http://byronknoll.blogspot.com/2011/03/vector-playing-cards.html)
### Starting points
- [Angular2 Seed project](https://github.com/angular/angular2-seed)

## Acknowledgements

- Big thanks to the Angular2 and TypeScript development teams.
- Hat tip to all the other libraries and developers.
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) - love their tools!
- Thanks to Byron Knoll for his work on the poker card images.



## License

MIT © Bryan Green