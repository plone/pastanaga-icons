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
    the_file.write("import React, { Component, Fragment } from 'react';\n")
    the_file.write("import Icon from './Icon';\n")

    for iconname, icon in iconsnames:
        the_file.write("import {} from '../icons/{}';\n".format(iconname, icon))

    the_file.write("""
class IconCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: '' };
  }

  list = [
""")

    for iconname, icon in iconsnames:
        the_file.write("    {{ name: '{}', component: <Icon name={{{}}} /> }},\n".format(icon, iconname))

    the_file.write("""
  ];

  handleChange = e => this.setState({ filter: e.target.value });

  render() {
    return (
      <Fragment>
        <div className="filter">
          <Icon name={zoomIcon} />
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </div>
        <div className="catalog">
          {this.list
            .filter(item => item.name.includes(this.state.filter))
            .map(item => (
              <div className="icon-info-wrapper">
                {item.component}
                <div className="icon-name">{item.name}</div>
              </div>
            ))}
        </div>
      </Fragment>
    );
  }
}

export default IconCatalog;
    """)
