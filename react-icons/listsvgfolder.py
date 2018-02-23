import json
import os

iconslist = os.listdir('./src/icons')
iconsnames = []
iconslist = sorted(iconslist)
for icon in iconslist:
    if 'svg' not in icon:
        continue
    iconname = icon.replace('.svg', '').replace('-', '_') + 'Icon'
    iconsnames.append(tuple([iconname, icon]))

# with open('src/icons/iconslist.json', 'w') as the_file:
#     the_file.write(json.dumps(iconsnames))

with open('src/components/Catalog.js', 'w') as the_file:
    the_file.write("import React, { Fragment } from 'react';")
    the_file.write("import Icon from './Icon';")

    for iconname, icon in iconsnames:
        the_file.write("import {} from '../icons/{}';\n".format(iconname, icon))

    the_file.write("\n")
    the_file.write("const IconCatalog = () => {")
    the_file.write("\n")
    the_file.write("  return (")
    the_file.write("\n")
    the_file.write("    <Fragment>")
    the_file.write("\n")

    for iconname, icon in iconsnames:
        the_file.write("      <div className='icon-info-wrapper'>\n")
        the_file.write("        <Icon name={{{}}} />\n".format(iconname))
        the_file.write("        <div className='icon-name'>{}</div>\n".format(icon))
        the_file.write("      </div>")
        the_file.write("\n")

    the_file.write("    </Fragment>\n")
    the_file.write("  )")
    the_file.write("\n")
    the_file.write("}")
    the_file.write("\n")
    the_file.write("export default IconCatalog;")
