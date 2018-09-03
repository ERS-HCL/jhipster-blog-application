import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './location-my-suffix.reducer';
import { ILocationMySuffix } from 'app/shared/model/location-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ILocationMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class LocationMySuffixDetail extends React.Component<ILocationMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { locationEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipsterBlogApp.location.detail.title">Location</Translate> [<b>{locationEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="streetAddress">
                <Translate contentKey="jhipsterBlogApp.location.streetAddress">Street Address</Translate>
              </span>
            </dt>
            <dd>{locationEntity.streetAddress}</dd>
            <dt>
              <span id="postalCode">
                <Translate contentKey="jhipsterBlogApp.location.postalCode">Postal Code</Translate>
              </span>
            </dt>
            <dd>{locationEntity.postalCode}</dd>
            <dt>
              <span id="city">
                <Translate contentKey="jhipsterBlogApp.location.city">City</Translate>
              </span>
            </dt>
            <dd>{locationEntity.city}</dd>
            <dt>
              <span id="stateProvince">
                <Translate contentKey="jhipsterBlogApp.location.stateProvince">State Province</Translate>
              </span>
            </dt>
            <dd>{locationEntity.stateProvince}</dd>
            <dt>
              <Translate contentKey="jhipsterBlogApp.location.country">Country</Translate>
            </dt>
            <dd>{locationEntity.countryId ? locationEntity.countryId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/location-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/location-my-suffix/${locationEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ location }: IRootState) => ({
  locationEntity: location.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationMySuffixDetail);
