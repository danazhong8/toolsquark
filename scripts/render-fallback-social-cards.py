from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


OUT_DIR = Path("assets/social")
OUT_DIR.mkdir(parents=True, exist_ok=True)


def font(name, size):
    try:
        return ImageFont.truetype(name, size)
    except OSError:
        return ImageFont.load_default()


FONT_BOLD = font("arialbd.ttf", 58)
FONT_TITLE_SMALL = font("arialbd.ttf", 48)
FONT_MID = font("arialbd.ttf", 24)
FONT_LABEL = font("arialbd.ttf", 18)
FONT_BODY = font("arial.ttf", 23)
FONT_SMALL = font("arial.ttf", 14)


def wrap(text, width):
    words = text.split()
    lines = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if len(candidate) > width and line:
            lines.append(line)
            line = word
        else:
            line = candidate
    if line:
        lines.append(line)
    return lines


def render_card(file_name, accent, title, description, dimensions):
    image = Image.new("RGB", (1200, 630), "#f8fafc")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 1200, 14), fill=accent)
    draw.text((70, 64), "ToolsQuark", fill="#2563eb", font=FONT_MID)
    draw.text((70, 172), "30-DAY ORIGINAL SELF-CHECK", fill=accent, font=FONT_LABEL)

    title_lines = wrap(title, 20)
    title_font = FONT_TITLE_SMALL if len(title_lines) > 2 else FONT_BOLD
    y = 225
    for line in title_lines[:3]:
        draw.text((70, y), line, fill="#0f172a", font=title_font)
        y += 54 if title_font == FONT_TITLE_SMALL else 65

    y += 22
    for line in wrap(description, 43)[:3]:
        draw.text((70, y), line, fill="#475569", font=FONT_BODY)
        y += 34

    draw.text((70, 574), "toolsquark.com", fill="#64748b", font=FONT_SMALL)
    draw.rounded_rectangle((760, 105, 1130, 535), radius=8, fill="#ffffff", outline="#dbe3ec", width=2)
    draw.text((800, 140), "Four-part answer pattern", fill="#0f172a", font=FONT_LABEL)

    colors = ["#2563eb", "#0891b2", "#16a34a", "#d97706"]
    widths = [74, 62, 54, 46]
    for index, label in enumerate(dimensions):
        row_y = 202 + index * 76
        draw.text((800, row_y - 18), label, fill="#334155", font=FONT_LABEL)
        draw.rounded_rectangle((800, row_y, 1090, row_y + 12), radius=6, fill="#e2e8f0")
        draw.rounded_rectangle((800, row_y, 800 + round(290 * widths[index] / 100), row_y + 12), radius=6, fill=colors[index])

    draw.line((800, 478, 1090, 478), fill="#e2e8f0", width=1)
    draw.text((800, 494), "Private browser-side reflection.", fill="#64748b", font=FONT_SMALL)
    draw.text((800, 516), "Not clinically validated or diagnostic.", fill="#64748b", font=FONT_SMALL)

    output = OUT_DIR / file_name
    image.save(output, "PNG")
    print(f"Rendered {output}")


render_card(
    "emotional-boundaries-self-check.png",
    "#0f766e",
    "Emotional Boundaries Self-Check",
    "A private 30-day self-check for emotional boundaries, limits, guilt pressure, and follow-through.",
    ["Boundary Awareness", "Limit Expression", "Guilt And Pressure", "Boundary Follow-Through"],
)

render_card(
    "relationship-communication-style-self-check.png",
    "#7c3aed",
    "Relationship Communication Style Self-Check",
    "A private 30-day self-check for directness, listening, emotional pacing, and repair signals.",
    ["Directness", "Listening Fit", "Emotional Pacing", "Repair Signals"],
)
