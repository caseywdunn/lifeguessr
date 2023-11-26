import pandas as pd

def convert_tsv_to_json(tsv_file_path, json_file_path):
    # Read the TSV file
    df = pd.read_csv(tsv_file_path, sep='\t')

    # Select and rename columns to match the desired JSON structure
    df = df[['url', 'start', 'organism', 'ncbiTaxonId', 'ncbiTaxonString', 'notes']]

    # Fill missing start times with 0 and ensure it's an integer
    df['start'] = df['start'].fillna(0).astype(int)

    # Convert the DataFrame to JSON format
    json_data = df.to_json(orient='records', indent=4)

    # Write the JSON data to a file
    with open(json_file_path, 'w') as file:
        file.write(json_data)

# Replace with your actual TSV file path and desired JSON output file path
tsv_file_path = 'videos.tsv'
json_file_path = 'videos_parsed.json'

convert_tsv_to_json(tsv_file_path, json_file_path)
