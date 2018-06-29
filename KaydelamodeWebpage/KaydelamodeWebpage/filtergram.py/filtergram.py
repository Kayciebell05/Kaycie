import Filter

def main():
    #ask the user what image it wants to edit
    fileName = input("Enter the name of the image file to edit: ")

    #Load the image from the specified file
    picture = filters.load_img(fileName)

    filters.show_img(picture)

main()
