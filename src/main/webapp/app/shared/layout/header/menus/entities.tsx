import React from 'react';
import { DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate, translate } from 'react-jhipster';
import { NavLink as Link } from 'react-router-dom';
import { NavDropdown } from '../header-components';

export const EntitiesMenu = props => (
  // tslint:disable-next-line:jsx-self-close
  <NavDropdown icon="th-list" name={translate('global.menu.entities.main')} id="entity-menu">
    <DropdownItem tag={Link} to="/entity/region-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.regionMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/country-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.countryMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/location-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.locationMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/department-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.departmentMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/task-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.taskMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/employee-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.employeeMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/job-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.jobMySuffix" />
    </DropdownItem>
    <DropdownItem tag={Link} to="/entity/job-history-my-suffix">
      <FontAwesomeIcon icon="asterisk" />&nbsp;<Translate contentKey="global.menu.entities.jobHistoryMySuffix" />
    </DropdownItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
