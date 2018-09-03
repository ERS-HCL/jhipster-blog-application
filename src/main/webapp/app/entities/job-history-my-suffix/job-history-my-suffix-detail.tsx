import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './job-history-my-suffix.reducer';
import { IJobHistoryMySuffix } from 'app/shared/model/job-history-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IJobHistoryMySuffixDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class JobHistoryMySuffixDetail extends React.Component<IJobHistoryMySuffixDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { jobHistoryEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipsterBlogApp.jobHistory.detail.title">JobHistory</Translate> [<b>{jobHistoryEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="startDate">
                <Translate contentKey="jhipsterBlogApp.jobHistory.startDate">Start Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={jobHistoryEntity.startDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="endDate">
                <Translate contentKey="jhipsterBlogApp.jobHistory.endDate">End Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={jobHistoryEntity.endDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="language">
                <Translate contentKey="jhipsterBlogApp.jobHistory.language">Language</Translate>
              </span>
            </dt>
            <dd>{jobHistoryEntity.language}</dd>
            <dt>
              <Translate contentKey="jhipsterBlogApp.jobHistory.job">Job</Translate>
            </dt>
            <dd>{jobHistoryEntity.jobId ? jobHistoryEntity.jobId : ''}</dd>
            <dt>
              <Translate contentKey="jhipsterBlogApp.jobHistory.department">Department</Translate>
            </dt>
            <dd>{jobHistoryEntity.departmentId ? jobHistoryEntity.departmentId : ''}</dd>
            <dt>
              <Translate contentKey="jhipsterBlogApp.jobHistory.employee">Employee</Translate>
            </dt>
            <dd>{jobHistoryEntity.employeeId ? jobHistoryEntity.employeeId : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/job-history-my-suffix" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/job-history-my-suffix/${jobHistoryEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ jobHistory }: IRootState) => ({
  jobHistoryEntity: jobHistory.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobHistoryMySuffixDetail);
