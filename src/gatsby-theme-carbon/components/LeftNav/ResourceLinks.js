import React from 'react';
import { SideNavLink } from 'carbon-components-react';
import { Launch16 as LaunchIcon } from '@carbon/icons-react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import { outboundLink, divider, dividerSpace } from 'gatsby-theme-carbon/src/components/LeftNav/LeftNav.module.scss';

const LeftNavResourceLinks = ({
  shouldOpenNewTabs,
  includeDividerSpace = true,
}) => {
  var links = [
    {
      title: 'API Reference',
      href: 'https://ibm.github.io/acd-containers/apidocs/index.html',
    },
    {
      title: 'Github',
      href: 'https://github.com/IBM/acd-containers',
    },
  //  {
  //    title: 'Knowledge Center',
  //    href: 'https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.nav.doc/spm_welcome.html',
  //  },
    {
      title: 'Change Log',
      href: 'https://github.com/IBM/acd-containers/blob/master/CHANGELOG.md',
    }
  ];

  const shouldOpenNewTabsProps = {
    ...({ rel: 'noopener noreferrer', target: '_blank' }),
  };

  return (
    <>
      <hr
        className={cx(divider, {
          [dividerSpace]: includeDividerSpace,
        })}
      />
      {links.map(({ title, href, ...rest }, i) => {
        return (
          <SideNavLink
            key={i}
            renderIcon={LaunchIcon}
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-current=""
            to={href}
            href={href}
            className={cx({ [outboundLink]: true })}
            element={'a'}
            {...shouldOpenNewTabsProps}>
            {title}
          </SideNavLink>
        );
      })}
    </>
  );
};

LeftNavResourceLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  // true if outbound links should open in a new tab
  shouldOpenNewTabs: PropTypes.bool,
};

export default LeftNavResourceLinks;
