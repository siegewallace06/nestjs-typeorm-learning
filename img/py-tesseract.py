from PIL import Image
import pytesseract

# Path to the Tesseract executable on Windows
pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'


def image_to_text(image_path, output_text_file):
    # Open the image file
    image = Image.open(image_path)

    # Use Tesseract to do OCR on the image
    text = pytesseract.image_to_string(image)

    # Save the extracted text to a text file
    with open(output_text_file, 'w', encoding='utf-8') as text_file:
        text_file.write(text)


if __name__ == "__main__":
    # Replace 'path/to/your/image.png' with the actual path to your image file
    input_image_path = input("Enter the path to your input image: ")

    # Replace 'output_text.txt' with the desired output text file name
    output_text_file_path = input_image_path.split(".")[0] + ".txt"

    image_to_text(input_image_path, output_text_file_path)
