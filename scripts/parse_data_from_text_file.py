# -*- coding: utf-8 -*-
# This parse the plain text data into JSON,
# but some work still need to be done to index it.
# Only work with the plain text parsing.
# Based on the one for parsing the response form the Wyatt public database.

import re

def trim(text):
    # Trim out the newline and sapces.
    return text.replace('\n', '').replace('\t', '').strip()

def fill_entry(entry, field_name, text):
    if field_name == 'Title:':
        #tree.xpath(field_data_xpath.format(idx, 2))
        #title = tree.xpath(field_data_xpath.format(idx, 2))[0].split('=')

        title = text.split('=')

        if len(title) == 1:
            entry['title_eng'] = title[0]
        elif len(title) == 2:
            entry['title_th'] = trim(title[0])
            entry['title_eng'] = trim(title[1])

    elif field_name == 'Author:':
        #tree.xpath(field_link_data_xpath.format(idx, 2))
        #author = tree.xpath(field_link_data_xpath.format(idx, 2))
        author = text

        if len(author) == 1:
            entry['author_eng'] = trim(author[0])
        elif len(author) == 2:
            entry['author_th'] = trim(author[0])
            entry['author_eng'] = trim(author[1])

    elif field_name == 'Imprint:':
        #tree.xpath(field_data_xpath.format(idx, 2))
        #imprint = tree.xpath(field_data_xpath.format(idx, 2))[0].split('=')
        imprint = text.split('=')

        if len(imprint) == 1:
            entry['imprint_eng'] = imprint[0]
        elif len(imprint) == 2:
            entry['imprint_th'] = trim(imprint[0])
            entry['imprint_eng'] = trim(imprint[1])

    elif field_name == 'Note:':
        #tree.xpath(field_data_xpath.format(idx, 2))
        #note = tree.xpath(field_data_xpath.format(idx, 2))[0].split('=')
        note = text.split('=')

        if len(note) == 1:
            entry['note_eng'] = trim(note[0])
        elif len(note) == 2:
            entry['note_th'] = trim(note[0])
            entry['note_eng'] = trim(note[1])

    elif field_name == 'Subject:':
        #tree.xpath(field_link_data_xpath.format(idx, 2))
        #subjects = tree.xpath(field_link_data_xpath.format(idx, 2))
        subjects = text.split(';')

        entry['subjects'] = []
        for subject in subjects:
            entry['subjects'].append(trim(subject))

    elif field_name == 'Description:':
        #tree.xpath(field_data_xpath.format(idx, 2))
        #description = tree.xpath(field_data_xpath.format(idx, 2))
        description = text

        if len(description) == 0:
            entry['description'] = ''
        else:
            entry['description'] = description

    elif field_name == 'OU Call Number:':
        #tree.xpath(field_data_xpath.format(idx, 2))
        #call_number = trim(''.join( tree.xpath(field_data_xpath.format(idx, 2)) ))
        call_number = trim(''.join(text))

        entry['call_number'] = call_number

    else:
        print('Unknown field name: ' + field_name)

    return entry

if __name__ == '__main__':
    number_pattern = re.compile('^[0-9]+\.$')

    entries = []

    with open('wyatt_unindexed_record', 'r') as f:
        prev_field = ''
        entry = {}

        for line in f:
            #print(line, end='')

            if number_pattern.match(line):
                print('Appending', entry, end='\n\n')
                entries.append(entry)
                entry = {}
            elif line == 'Author:\n':
                prev_field = line[:-1]
            elif line == 'Title:\n':
                prev_field = line[:-1]
            elif line == 'Imprint:\n':
                prev_field = line[:-1]
            elif line == 'Description:\n':
                prev_field = line[:-1]
            elif line == 'Subject:\n':
                prev_field = line[:-1]
            elif line == 'Note:\n':
                prev_field = line[:-1]
            elif line == '\n':
                pass
                #print('empty')
            else:
                # Assume that it is a data.
                entry = fill_entry(entry, prev_field, line[:-1])
                #entry[prev_field] = line

        # Add the last entry.
        print('Appending', entry, end='\n\n')
        entries.append(entry)
        entry = {}

        # Cut the first one out (it is empty).
        entries = entries[1:]
