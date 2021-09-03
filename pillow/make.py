from PIL import Image, ImageFont, ImageDraw

heading = "Certificate for Marriage"
lines = [
    "This certifies that",
    "Somesh Kar & Pulkit Garg",
    "were united in marriage",
    "at Marine Drive, Mumbai",
    "on the 19th day of July in the year 2021",
    "by Adolf Hitler"
]

heading_font = ImageFont.truetype(
    './fonts/Inter Hinted for Windows/Desktop/Inter-Bold.ttf', 70)
normal_font = ImageFont.truetype(
    './fonts/Inter Hinted for Windows/Desktop/Inter-Regular.ttf', 40)

certi_template = Image.open('./templates/wedding-template.jpeg')
draw = ImageDraw.Draw(certi_template)

W, H = certi_template.width, certi_template.height
# print(W, H)

heading_w, heading_h = heading_font.getsize(heading)
draw.text(((W - heading_w) / 2, 90),
          heading, (41, 119, 245), font=heading_font)


i = 1
for l in lines:
    w, h = normal_font.getsize(l)
    draw.text(((W - w) / 2, 240 + ((h + 10) * (i - 1))),
              l, (47, 46, 65), font=normal_font)

    i += 1


certi_template.show()
