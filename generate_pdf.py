"""
Generate PDF from sales_pitch.html using Playwright (Chrome/Chromium)

This method uses the actual browser engine to render the PDF,
which guarantees pixel-perfect output matching what you see in the browser.

Install dependencies first:
    pip install playwright
    playwright install chromium

Then run:
    python generate_pdf.py
"""

import asyncio
from pathlib import Path

async def generate_pdf():
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        print("Playwright not installed. Installing now...")
        import subprocess
        import sys
        subprocess.check_call([sys.executable, "-m", "pip", "install", "playwright"])
        subprocess.check_call([sys.executable, "-m", "playwright", "install", "chromium"])
        from playwright.async_api import async_playwright
    
    # Paths
    script_dir = Path(__file__).parent
    html_file = script_dir / "sales_pitch.html"
    pdf_file = script_dir / "Autonomis_Sales_Pitch.pdf"
    
    if not html_file.exists():
        print(f"Error: {html_file} not found!")
        return
    
    print(f"Converting {html_file.name} to PDF...")
    
    async with async_playwright() as p:
        # Launch headless Chrome
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        # Load the HTML file
        await page.goto(f"file:///{html_file.as_posix()}")
        
        # Wait for fonts to load
        await page.wait_for_timeout(2000)
        
        # Generate PDF with exact settings
        await page.pdf(
            path=str(pdf_file),
            format="Letter",
            print_background=True,  # Include background colors/images
            margin={
                "top": "0",
                "right": "0",
                "bottom": "0",
                "left": "0"
            }
        )
        
        await browser.close()
    
    print(f"SUCCESS: PDF generated: {pdf_file}")
    print(f"   File size: {pdf_file.stat().st_size / 1024:.1f} KB")

if __name__ == "__main__":
    asyncio.run(generate_pdf())
