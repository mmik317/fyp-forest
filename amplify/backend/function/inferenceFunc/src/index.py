import json

def handler(event, context):
  print('received event:')
  print(event)
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps('Hello from your new Amplify Python lambda!')
  }

def resultFile(region, starting_year, ending_year):
    region = region.lower().replace(" ", "_")

    if starting_year == ending_year:
        year = starting_year
        path = '{}_{}.png'.format(region, year)
        return '/mnt/c/Users/Ziaya/Desktop/Datasets Forest/Digitized_Forest_Maps_2014_2020_png/' + path
    else:
        path = '{}_{}_{}_2.png'.format(region, starting_year, ending_year)
        return '/mnt/c/Users/Ziaya/Desktop/Datasets Forest/comparison-2/' + path

        
print(resultFile("Haripur", 2015, 2015))
print(resultFile("Hariput", 2015, 2019))