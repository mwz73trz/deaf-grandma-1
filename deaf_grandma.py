def deaf_grandma():
    number_of_goodbyes = 0

    while number_of_goodbyes <= 1:
        response = input("Say something to Grandma: ")

        if response == "GOODBYE!":
            if number_of_goodbyes < 1:
                number_of_goodbyes += 1
                print("LEAVING SO SOON?")
            else:
                print("LATER SKATER!")
                return
        elif response == "":
            print("WHAT?!")
        elif response.islower():
            print("SPEAK UP, KID!")
        else:
            print("NO, NOT SINCE 1946!")



deaf_grandma()
