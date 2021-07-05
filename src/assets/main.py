from PIL import Image

PATH = 'pexels-adrienne-andersen-2254065.png'
NEW_NAME = 'quem-somos.jpg'

im = Image.open(PATH)
width = 815
height = round((width * im.size[1]) / im.size[0])

im = im.resize((width, height), Image.ANTIALIAS)
rgb_im = im.convert('RGB')

rgb_im.save(NEW_NAME, optimize=True, quality=75)
