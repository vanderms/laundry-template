from PIL import Image

im = Image.open('pexels-arina-krasnikova-5418933.jpg')
width = 1920
height = round((width * im.size[1]) / im.size[0])

im = im.resize((width, height), Image.ANTIALIAS)

im.save("cover.jpg", optimize=True, quality=75)
