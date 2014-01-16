https://github.com/efunneko/jquery.createHtml - jQuery version
Element.js
=======
##Plain Javascript framework for creating DOM elements.
###Features:
* Balance between readability and amount of code
* Object-oriented style &hearts;
* Speed and size

###Idea:

```
  new Element({
    attribute:value
  },[
    new AnotherElement({
      attribute:value
    }),
    new YetAnotherElement([
       new NewElement()
    ])
  ]);
```

###Example:
```
var ul = new Ul({
    class: "example-list",
    onclick: "alert(\"example\");"
}, [
    new Li({
        id: "first-feature"
    }, ["Balance between readability and amount of code"]),
    new Li({
        id: "cool-feature"
    }, ["Object-oriented style"]),
    new Li({
        id: "default-feature"
    }, [
        "Speed and size",
        new Span({
          style:"color:red"
        },[String.fromCharCode(9829)]
    ]),

]);
```
  
  
