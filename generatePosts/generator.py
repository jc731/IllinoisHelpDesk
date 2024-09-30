import os
import json

# Define the path to the articles.json file
data_file = 'articles.json'

# Define the output directory (./new/)
output_directory = os.path.join(os.getcwd(), 'new')

# Create the output directory if it doesn't exist
if not os.path.exists(output_directory):
    os.makedirs(output_directory)

# Load the articles from the JSON file
with open(data_file, 'r', encoding='utf-8') as f:
    articles = json.load(f)

# Iterate over each article and create markdown files
for article in articles:
    filename = article['filename']
    front_matter = article['front_matter']
    content = article.get('content', '')
    
    # Combine front matter and content
    file_content = f"{front_matter}\n\n{content}"
    
    # Define the full path for the output file
    file_path = os.path.join(output_directory, filename)
    
    # Write the content to the markdown file
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(file_content)
    
    print(f"Created {file_path}")
