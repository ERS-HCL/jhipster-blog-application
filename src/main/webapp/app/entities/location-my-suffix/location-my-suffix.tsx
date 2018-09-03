import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './location-my-suffix.reducer';
import { ILocationMySuffix } from 'app/shared/model/location-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILocationMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class LocationMySuffix extends React.Component<ILocationMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { locationList, match } = this.props;
    return (
      <div>
        <h2 id="location-my-suffix-heading">
          <Translate contentKey="jhipsterBlogApp.location.home.title">Locations</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="jhipsterBlogApp.location.home.createLabel">Create new Location</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterBlogApp.location.streetAddress">Street Address</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterBlogApp.location.postalCode">Postal Code</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterBlogApp.location.city">City</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterBlogApp.location.stateProvince">State Province</Translate>
                </th>
                <th>
                  <Translate contentKey="jhipsterBlogApp.location.country">Country</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {locationList.map((location, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${location.id}`} color="link" size="sm">
                      {location.id}
                    </Button>
                  </td>
                  <td>{location.streetAddress}</td>
                  <td>{location.postalCode}</td>
                  <td>{location.city}</td>
                  <td>{location.stateProvince}</td>
                  <td>{location.countryId ? <Link to={`country-my-suffix/${location.countryId}`}>{location.countryId}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${location.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${location.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${location.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ location }: IRootState) => ({
  locationList: location.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationMySuffix);
