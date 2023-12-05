
# # Shop function
# dog_food = "Dog Food"
# cat_food = "Cat Food"
# cart = []
# print("Do you want dog food or cat food?")

# choice = input("Enter your choice: ").lower()
# if choice == "dog food":
#     cart.append(dog_food)
#     print("You have chosen:", dog_food)
# elif choice == "cat food":
#     cart.append(cat_food)
#     print("You have chosen:", cat_food)
# else:
#     print("Invalid choice.")

# print("Your cart contains", cart)


# Edit Cart Function

""" Allow user to remove items from cart, continue shopping, or proceed to checkout
If user removes all items. Show message 'cart empty' 

Print cart 
Ask for user input on the next step
Allow user to remove items
Allow user to proceed to checkout or continue shopping
"""



# Cart Function - Allows user to select between completing their purchase, continue shopping or edit their cart. 

def cart():

     done = False
     while not done:
        print()
        print("Select one of the following options")
        print("1. Complete your purchase")
        print("2. Continue shopping")
        print("3. Edit your cart")
        option = input("Enter your option: ").lower()
        if option == "1": 
            print("Checkout")        # Takes user to checkout 
        elif option == "2":
            shop()                   # Returns user to shop 
        elif option == "3": 
            print("edit_cart")            # Allows user to edit cart
            done = True
        else: 
            print("Invalid choice")



# Shop function

cart_products = []
cart_price = []
total = 0
dog_food = "Dog Food"
food_price = 9.99
dog_lead = "Dog Lead"
lead_price = 19.99
dog_collar = "Dog Collar"
collar_price = 14.99
dog_bed = "Dog Bed"
bed_price = 39.99



def shop():
    print(" ------ Welcome to The Canine Corner Shop ------- ")
    done = False
    while not done:
        print()
        print("1. 1kG - Premium Dog Food: $9.99")
        print("2. Hand Made Dog Lead: $19.99")
        print("3. Extra Durable Dog Collar: $14.99")
        print("4. Machine Washable Dog Bed: $39.99")
        print("5. View your cart")
        print()
        choice = input("Enter you choice (1,2,3,4,5):").lower()
        if choice == "1":
            print()
            print("You added dog food to cart")
            cart_products.append(dog_food)
            cart_price.append(food_price)
        elif choice == "2":
            print()
            print("You added a dog lead to cart")
            cart_products.append(dog_lead)
            cart_price.append(lead_price)
        elif choice == "3":
            print()
            print("You added a dog collar to cart")
            cart_products.append(dog_collar)
            cart_price.append(collar_price)
        elif choice == "4":
            print()
            print("You added a dog bed to cart")
            cart_products.append(dog_bed)
            cart_price.append(bed_price)
        elif choice == "5":
            print()
            print("Viewing cart")
            view_cart()
            done = True
        else:
            print("invalid choice")


# View cart

def view_cart():
    total = 0
    
    print(cart_products)

    for prices in cart_price:
        total += prices

    print("Your total is $", total)

shop()

cart()











# def edit_cart():

#     edit_cart()
#     print




# Main Menu - Allows user to choose between shopping or going to cart

# def display_menu():
#     done = False
# while not done:
#     print("Menu")
#     print("Shop")
#     print("Cart")
#     choice = input("Enter your choice (shop/cart): ").lower()
#     if choice == "shop":
#         print("Shop")
#         done = True
#     elif choice == "cart":
#         print("Cart")
#         done = True
#     else:
#         print("Incorrect entry")


