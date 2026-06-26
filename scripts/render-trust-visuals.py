from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


OUT_DIR = Path("assets/visual-guides")
OUT_DIR.mkdir(parents=True, exist_ok=True)


def font(name, size):
    try:
        return ImageFont.truetype(name, size)
    except OSError:
        return ImageFont.load_default()


FONT_H1 = font("arialbd.ttf", 48)
FONT_H2 = font("arialbd.ttf", 28)
FONT_H3 = font("arialbd.ttf", 21)
FONT_BODY = font("arial.ttf", 20)
FONT_SMALL = font("arial.ttf", 16)
FONT_TINY = font("arial.ttf", 13)


def wrap(text, max_chars):
    words = text.split()
    lines = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if len(candidate) > max_chars and line:
            lines.append(line)
            line = word
        else:
            line = candidate
    if line:
        lines.append(line)
    return lines


def rounded_card(draw, xy, fill="#ffffff", outline="#dbe3ec"):
    draw.rounded_rectangle(xy, radius=18, fill=fill, outline=outline, width=2)


def text_block(draw, xy, title, body, width_chars=30, accent="#2563eb"):
    x, y = xy
    draw.text((x, y), title, fill="#0f172a", font=FONT_H3)
    y += 32
    for line in wrap(body, width_chars)[:4]:
        draw.text((x, y), line, fill="#475569", font=FONT_SMALL)
        y += 22
    draw.rounded_rectangle((x, y + 8, x + 72, y + 14), radius=3, fill=accent)


def save(image, file_name):
    output = OUT_DIR / file_name
    image.save(output, "PNG", optimize=True)
    print(f"Rendered {output}")


def home_trust_map():
    image = Image.new("RGB", (1400, 620), "#f8fafc")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((30, 30, 1370, 590), radius=28, fill="#ffffff", outline="#dbe3ec", width=2)
    draw.text((80, 76), "Transparent tools, private by design", fill="#0f172a", font=FONT_H1)
    draw.text((82, 136), "A quick visual map of how ToolsQuark pages are built for practical use.", fill="#475569", font=FONT_BODY)

    cards = [
        ("Input", "Enter only the numbers or answers needed for the tool.", "#2563eb"),
        ("Method", "See formulas, dimensions, assumptions, and limits.", "#0891b2"),
        ("Result", "Read the estimate or pattern with context.", "#16a34a"),
        ("Next Step", "Use related tools or guides without creating an account.", "#d97706"),
    ]
    x = 80
    for index, (title, body, accent) in enumerate(cards):
        left = x + index * 315
        rounded_card(draw, (left, 220, left + 260, 455))
        draw.rounded_rectangle((left + 24, 244, left + 80, 300), radius=16, fill=accent)
        draw.text((left + 100, 254), f"0{index + 1}", fill=accent, font=FONT_H2)
        text_block(draw, (left + 24, 325), title, body, 25, accent)
        if index < 3:
            draw.line((left + 270, 338, left + 305, 338), fill="#94a3b8", width=4)
            draw.polygon([(left + 305, 338), (left + 292, 329), (left + 292, 347)], fill="#94a3b8")

    draw.text((80, 525), "No account required. Core calculator inputs and self-check answers stay in the browser.", fill="#64748b", font=FONT_SMALL)
    save(image, "home-trust-map.png")


def calculator_method():
    image = Image.new("RGB", (900, 620), "#f8fafc")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((24, 24, 876, 596), radius=24, fill="#ffffff", outline="#dbe3ec", width=2)
    draw.text((62, 66), "Calculator method guide", fill="#0f172a", font=FONT_H2)
    draw.text((64, 105), "Read an estimate through its method, not just the number.", fill="#475569", font=FONT_SMALL)

    rows = [
        ("1", "Inputs", "Only the fields needed for the estimate.", "#2563eb"),
        ("2", "Formula", "Displayed assumptions and worked examples.", "#0891b2"),
        ("3", "Result", "Rounded output with interpretation notes.", "#16a34a"),
        ("4", "Limits", "Clear boundary between estimate and advice.", "#d97706"),
    ]
    y = 170
    for num, title, body, accent in rows:
        rounded_card(draw, (64, y, 836, y + 82), fill="#f8fafc")
        draw.ellipse((92, y + 22, 132, y + 62), fill=accent)
        draw.text((107, y + 31), num, fill="#ffffff", font=FONT_TINY)
        draw.text((162, y + 18), title, fill="#0f172a", font=FONT_H3)
        draw.text((162, y + 48), body, fill="#475569", font=FONT_SMALL)
        y += 98

    draw.line((64, 545, 836, 545), fill="#e2e8f0", width=2)
    draw.text((64, 562), "Educational estimate. References and methodology stay visible on the page.", fill="#64748b", font=FONT_TINY)
    save(image, "calculator-method-guide.png")


def self_check_method():
    image = Image.new("RGB", (900, 620), "#f8fafc")
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((24, 24, 876, 596), radius=24, fill="#ffffff", outline="#dbe3ec", width=2)
    draw.text((62, 66), "Self-check structure guide", fill="#0f172a", font=FONT_H2)
    draw.text((64, 105), "Designed for reflection, not diagnosis or labels.", fill="#475569", font=FONT_SMALL)

    columns = [
        ("12", "scored items", "Balanced across four dimensions"),
        ("4", "dimensions", "Shows where patterns cluster"),
        ("+", "context", "Separate from the score"),
    ]
    x = 64
    for label, title, body in columns:
        rounded_card(draw, (x, 170, x + 240, 340), fill="#f8fafc")
        draw.text((x + 28, 202), label, fill="#2563eb", font=FONT_H1)
        draw.text((x + 28, 262), title, fill="#0f172a", font=FONT_H3)
        for line_index, line in enumerate(wrap(body, 22)[:2]):
            draw.text((x + 28, 294 + line_index * 17), line, fill="#475569", font=FONT_TINY)
        x += 270

    bars = [("#2563eb", 0.78), ("#0891b2", 0.62), ("#16a34a", 0.52), ("#d97706", 0.42)]
    y = 410
    for index, (color, width) in enumerate(bars):
        draw.text((82, y - 6), f"Dimension {index + 1}", fill="#334155", font=FONT_TINY)
        draw.rounded_rectangle((250, y, 760, y + 14), radius=7, fill="#e2e8f0")
        draw.rounded_rectangle((250, y, 250 + int(510 * width), y + 14), radius=7, fill=color)
        y += 34

    draw.text((64, 562), "Original educational self-check. No clinical diagnosis, no answer sharing by default.", fill="#64748b", font=FONT_TINY)
    save(image, "self-check-method-guide.png")


home_trust_map()
calculator_method()
self_check_method()
