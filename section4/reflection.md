## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

It felt surprisingly good. The timer seemed to go off right when I was finishing something up. That could be a coincidence. But it was good that I got in a longer break in there too. It gave me a little time to go to the store and grab some caffeine.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

I wasn't sure how quickly each task would go, so I just wrote down all of the tasks for the Section 4 work and made check marks next to the one I was working on when the timer went off. It went much quicker than the estimated time was set for. I was able to focus easily. I made 6 check marks total, with the long break at the 4th check mark. So, it looks like I spent a total of about 3.5 hours on the section, including breaks, up until this point.

1. What is an Object, and how is it different from an Array in Javascript?

An object is a set of unordered key-value pairs, as opposed to an ordered list of values. A value in an array is accessible through the index, which corresponds to its position in the array. A value in an object is accessible by its key, which is a string (not a number) that is descriptive of the type of value it holds. For instance, a key-value pair may be `color: red`. The value `red` is accessible through its key, `color`.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class - Array - This is a simple list, where all of the entries are of the same type.
  * List of states and their capitals - Object - Each state has a property, `capital`. Each state could also have a property called `name` or `stateName`.
  * List of things to pack for vacation - Array - This is a simple list that does not require properties of the items in the list.
  * Names of all the Instagram accounts I follow - Array - This is a simple list. However, the names of the accounts could themselves be properties of objects, with the objects being the different accounts.
  * List of student names and their cohort - Object - Since there are multiple properties associated with each student (`studentName`, `cohort`), it is better to use an object.
  * Ingredients and amount of each ingredient to bake a cake - Object - Multiple properties for each ingredient: `ingredientName` and `amount`
  * All my favorite restaurants - Array - Simple List

1. In this section, we talked about an `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

A web app I use every day is Spotify. An artist can be thought of as an object, which probably contains more objects. Here is an example of what the data may look like:

`class artist {
  constructor (name, numberOfFollowers, albums, singles) {
    this.name = name;
    this.numberOfFollowers = numberOfFollowers;
    this.albums = albums;
    this.singles = singles
  }
};`

1. What questions do you still have about classes and/or Objects?

For the above example, `class artist`, if I wanted to create a constructor for `albums`, to output an array of objects, would I do all of this within the parent class or would I define the method outside of the `artist` class? I'm sure we will get into this in Mod 1.
