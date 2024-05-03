# Boyer-Moore Voting 🍕🍕🍕🍕🍕

Imagine you're at a pizza party, and everyone gets to vote for their favorite topping. 
You're trying to figure out which topping most people want without counting every single vote. 
So, you start by picking one topping and keep track of how many people want it.

Then, a new topping like pepperoni bursts onto the scene, making a big fuss. 
Instead of immediately jumping ship, you stick with your original choice. 
But if the new topping gets as many votes as your original one, you switch sides.

You keep adjusting your choice based on the votes, but you don't start counting from scratch each
time. You just subtract one vote from the other topping every time there's a tie.

Eventually, you end up with the topping that has the most votes left on your tally. 
And just like that, you've found the favorite topping without having to tally every 
single vote again and again. That's the Boyer-Moore Voting Majority algorithm for 
you—a smart way to find the winner without all the hassle!
