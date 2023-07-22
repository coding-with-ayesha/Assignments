# Store the person's name in a variable
person_name = "Eric"

# Print the personalized message
print("Hello " + person_name + ", would you like to learn some Python today?")




# Store the person's name in a variable
person_name = "John Doe"

# Print the name in lowercase
print("Lowercase:", person_name.lower())

# Print the name in uppercase
print("Uppercase:", person_name.upper())

# Print the name in title case
print("Titlecase:", person_name.title())




# Famous quote and its author
quote = "A person who never made a mistake never tried anything new."
author = "Albert Einstein"

# Print the quote and the name of its author
print(f'{author} once said, "{quote}"')


# Store the famous person's name in a variable
famous_person = "Albert Einstein"

# Famous quote from the person
quote = "A person who never made a mistake never tried anything new."

# Compose the message
message = f'{famous_person} once said, "{quote}"'

# Print the message
print(message)


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


# Store your favorite number in a variable
favorite_number = 7

# Create a message to reveal your favorite number
message = f"My favorite number is: {favorite_number}"

# Print the message
print(message)


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


# Store the names of your friends in an array called "names"
names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Print each person's name one at a time by accessing each element in the list
print("List of names:")
for name in names:
    print(name)


# Store the names of your friends in an array called "names"
names = ["Alice", "Bob", "Charlie", "David", "Eve"]

# Print a personalized greeting message for each person in the array
print("Greetings:")
for name in names:
    print(f"Hello {name}, how are you doing today?")


# Create a list of favorite mode of transportation examples
favorite_transportation = ["Honda motorcycle", "Tesla Model S", "Toyota Prius", "Ford Mustang", "Lamborghini Aventador"]

# Print statements about these items
print("Examples of favorite modes of transportation:")
for item in favorite_transportation:
    print(f"I would like to own a {item}.")


    # Create a list of people to invite to dinner
guest_list = ["Albert Einstein", "Marie Curie", "Nelson Mandela"]

# Print invitation messages for each person
print("Invitation to Dinner:")
for guest in guest_list:
    print(f"Dear {guest},\nYou are cordially invited to dinner. It would be an honor to have you join us.\nLooking forward to your presence.\n\nBest regards,\n[Your Name]")
    print("=" * 40)  # A separator to distinguish each invitation


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


# Create a list of mountains
mountains_list = ["Mount Everest", "Kilimanjaro", "Matterhorn", "Denali", "Mount Fuji"]

# Print the list of mountains
print("List of Mountains:")
for mountain in mountains_list:
    print(mountain)


