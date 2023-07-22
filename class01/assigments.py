
Install Node.js, TypeScript and VS Code on your computer.

Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

# Store the person's name in a variable
person_name = "Eric"

# Print the personalized message
print("Hello " + person_name + ", would you like to learn some Python today?")


Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

# Store the person's name in a variable
person_name = "John Doe"

# Print the name in lowercase
print("Lowercase:", person_name.lower())

# Print the name in uppercase
print("Uppercase:", person_name.upper())

# Print the name in title case
print("Titlecase:", person_name.title())



Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”
# Famous quote and its author
quote = "A person who never made a mistake never tried anything new."
author = "Albert Einstein"

# Print the quote and the name of its author
print(f'{author} once said, "{quote}"')


Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

# Store the famous person's name in a variable
famous_person = "Albert Einstein"

# Famous quote from the person
quote = "A person who never made a mistake never tried anything new."

# Compose the message
message = f'{famous_person} once said, "{quote}"'

# Print the message
print(message)


Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

# Store the person's name with whitespace characters
person_name = "\t  John Doe\n  "

# Print the name with the whitespace
print("Name with whitespace:")
print(person_name)

# Strip the whitespace from the name
stripped_name = person_name.strip()

# Print the name after stripping the whitespace
print("\nName after stripping whitespace:")
print(stripped_name)

Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

# Addition operation
addition_result = 5 + 3
print("Addition Result:", addition_result)

# Subtraction operation
subtraction_result = 15 - 7
print("Subtraction Result:", subtraction_result)

# Multiplication operation
multiplication_result = 4 * 2
print("Multiplication Result:", multiplication_result)

# Division operation
division_result = 16 / 2
print("Division Result:", division_result)


Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

# Store your favorite number in a variable
favorite_number = 7

# Create a message to reveal your favorite number
message = f"My favorite number is: {favorite_number}"

# Print the message
print(message)


Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

# Famous Quote Program
# This program displays a famous quote and its author.

# Store the famous person's name in a variable
famous_person = "Albert Einstein"

# Famous quote from the person
quote = "A person who never made a mistake never tried anything new."

# Compose the message
message = f'{famous_person} once said, "{quote}"'

# Print the message
print(message)


Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

# Store the names of your friends in an array called "names"
names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Print each person's name one at a time by accessing each element in the list
print("List of names:")
for name in names:
    print(name)


Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

# Store the names of your friends in an array called "names"
names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Print a personalized greeting message for each person in the array
print("Greetings:")
for name in names:
    print(f"Hello {name}, how are you doing today?")


Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

# Create a list of favorite mode of transportation examples
favorite_transportation = ["Honda motorcycle", "Tesla Model S", "Toyota Prius", "Ford Mustang", "Lamborghini Aventador"]

# Print statements about these items
print("Examples of favorite modes of transportation:")
for item in favorite_transportation:
    print(f"I would like to own a {item}.")


Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

    # Create a list of people to invite to dinner
guest_list = ["Albert Einstein", "Marie Curie", "Nelson Mandela"]

# Print invitation messages for each person
print("Invitation to Dinner:")
for guest in guest_list:
    print(f"Dear {guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.\nLooking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation


Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

# Original list of people to invite to dinner
guest_list = ["Albert Einstein", "Marie Curie", "Nelson Mandela"]

# Print the original invitation messages
print("Original Invitation to Dinner:")
for guest in guest_list:
    print(f"Dear {guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.\nLooking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation

# Inform people about the bigger dinner table
print("\nGreat news! We found a bigger dinner table, and more space is available.\n")

# Add one new guest to the beginning of the array
guest_list.insert(0, "Leonardo da Vinci")

# Add one new guest to the middle of the array
guest_list.insert(len(guest_list) // 2, "Isaac Newton")

# Use append() to add one new guest to the end of the list
guest_list.append("Galileo Galilei")

# Print a new set of invitation messages with the updated guest list
print("Updated Invitation to Dinner:")
for guest in guest_list:
    print(f"Dear {guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.\nLooking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation


More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

# Original list of people to invite to dinner
guest_list = ["Leonardo da Vinci", "Albert Einstein", "Isaac Newton", "Marie Curie", "Nelson Mandela", "Galileo Galilei"]

# Print the original invitation messages
print("Original Invitation to Dinner:")
for guest in guest_list:
    print(f"Dear {guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.\nLooking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation

# Inform that you can invite only two people for dinner
print("\nImportant Notice: Due to unforeseen circumstances, we can only invite two people for dinner.\n")

# Remove guests from the list one at a time until only two names remain
while len(guest_list) > 2:
    removed_guest = guest_list.pop()
    print(f"Sorry, {removed_guest}, I'm unable to invite you to dinner.")

# Print messages to the two people still on the list, letting them know they're still invited
print("\nInvitations to the remaining guests:")
for remaining_guest in guest_list:
    print(f"Dear {remaining_guest},\nYou are still cordially invited to dinner. Looking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation

# Remove the last two names from the list to have an empty list
guest_list.clear()

# Print the list to ensure it's empty
print("\nRemaining guests after clearing the list:", guest_list)


Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

# Array of places to visit
places_to_visit = ["Paris", "Tokyo", "Venice", "New York", "Machu Picchu"]

# Print the array in its original order
print("Original order:")
print(places_to_visit)

# Print the array in alphabetical order without modifying the original list
print("\nAlphabetical order (without modifying the original list):")
print(sorted(places_to_visit))

# Show that the original order remains unchanged
print("\nOriginal order (unchanged):")
print(places_to_visit)

# Print the array in reverse alphabetical order without changing the original list
print("\nReverse alphabetical order (without modifying the original list):")
print(sorted(places_to_visit, reverse=True))

# Show that the original order remains unchanged
print("\nOriginal order (unchanged):")
print(places_to_visit)

# Reverse the order of the list
places_to_visit.reverse()

# Print the array to show its order has changed
print("\nReversed order:")
print(places_to_visit)

# Reverse the order of the list again to get back to the original order
places_to_visit.reverse()

# Print the list to show it's back to its original order
print("\nBack to the original order:")
print(places_to_visit)

# Sort the array in alphabetical order (permanently changing the order)
places_to_visit.sort()

# Print the array to show its order has changed
print("\nSorted in alphabetical order:")
print(places_to_visit)

# Sort the array in reverse alphabetical order (permanently changing the order)
places_to_visit.sort(reverse=True)

# Print the array to show its order has changed
print("\nSorted in reverse alphabetical order:")
print(places_to_visit)


Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

# Original list of people to invite to dinner
guest_list = ["Leonardo da Vinci", "Albert Einstein", "Isaac Newton", "Marie Curie", "Nelson Mandela", "Galileo Galilei"]

# Print the original invitation messages
print("Original Invitation to Dinner:")
for guest in guest_list:
    print(f"Dear {guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.\nLooking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation

# Inform that you can invite only two people for dinner
print("\nImportant Notice: Due to unforeseen circumstances, we can only invite two people for dinner.\n")

# Remove guests from the list one at a time until only two names remain
while len(guest_list) > 2:
    removed_guest = guest_list.pop()
    print(f"Sorry, {removed_guest}, I'm unable to invite you to dinner.")

# Print messages to the two people still on the list, letting them know they're still invited
print("\nInvitations to the remaining guests:")
for remaining_guest in guest_list:
    print(f"Dear {remaining_guest},\nYou are still cordially invited to dinner. Looking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation

# Print the number of people you are inviting to dinner
print(f"\nTotal number of people invited to dinner: {len(guest_list)}")


Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

# Create a list of mountains
mountains_list = ["Mount Everest", "Kilimanjaro", "Matterhorn", "Denali", "Mount Fuji"]

# Print the list of mountains
print("List of Mountains:")
for mountain in mountains_list:
    print(mountain)


