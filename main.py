
import argparse
from datetime import date
import os.path
import pandas as pd
import subprocess


def report(x):
  print('do a report')

def makeEntry(filename, df, args):
  new_row = pd.DataFrame([[today, args.title, args.url, args.description, args.tags]], 
  columns=['date', 'title', 'url', 'description', 'tags'])
  df = pd.concat([df, new_row])  
  df.reset_index(drop=True, inplace=True)

  df.to_csv(filename, header=True, index=False)

def git(m):
  commit = ['sh', 'commit.sh', m]
  subprocess.run(commit)

# 3. process command line args
#  -r report - print current period summary
#  -ra report on all periods
#  -e - make a new entry
#  -d - description
#  -t - time in hours:mins
#  -c - category - curriculum | mentor | interview
#  -g - auto commit to github
parser = argparse.ArgumentParser(description='Manage hours')
parser.add_argument('--entry', '-e', help='Create a new entry', const=True, action='store_const')
parser.add_argument('--print', '-p', help='Print all entries', const=True, action='store_const')
parser.add_argument('--git', '-g', help='Auto commit to git', const=True, action='store_const')
parser.add_argument('--message', '-m',
                     help='The commit message of the entry')
parser.add_argument('--url', '-u', 
                     help='The URL of the link')
parser.add_argument('--tags', '-t', default='',
                     help='Comma delimited list of tags')                    
parser.add_argument('--title', '-n',
                     help='The title of the bookmark')                                         
parser.add_argument('--description', '-d',
                     help='The description of the bookmark')    
parser.add_argument('--search', '-s', help='Search tags, title and description')                     
args = parser.parse_args()

if(args.entry and (args.description is None)):
  parser.error('-e requires -d description')

if(args.entry and (args.title is None)):
  parser.error('-e requires -n title')

if(args.entry and (args.url is None)):
  parser.error('-e requires -u url')  

if(args.git and (args.message is None)):
  parser.error('-g requires -m message')

# 1. check the current period

today = date.today()

# 2. Does a data file exist for the period
# if not, create one, if it does open it.

filename = 'data/data.csv' #data/{}_{}_{}.csv'.format(period, today.month, today.year)
if(os.path.isfile(filename)):
  df = pd.read_csv(filename, header=0)
else:
  df = pd.DataFrame(columns=['date', 'title', 'url', 'description', 'tags'])

if(args.entry):
  makeEntry(filename, df, args)

if(args.print):
  print(df)

if(args.git):
  git(args.message)

if(args.search):
  print("Searching " + args.search)  
  results = df.iloc[df['title'].str.lower().str.contains(args.search.lower()).values]
  print(results)

# 4. Reports

# 5. New Entry

