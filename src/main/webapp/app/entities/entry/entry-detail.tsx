import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entry.reducer';
import { IEntry } from 'app/shared/model/entry.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntryDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export class EntryDetail extends React.Component<IEntryDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { entryEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jhipsterBlogApp.entry.detail.title">Entry</Translate> [<b>{entryEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="title">
                <Translate contentKey="jhipsterBlogApp.entry.title">Title</Translate>
              </span>
            </dt>
            <dd>{entryEntity.title}</dd>
            <dt>
              <span id="content">
                <Translate contentKey="jhipsterBlogApp.entry.content">Content</Translate>
              </span>
            </dt>
            <dd dangerouslySetInnerHTML={{ __html: entryEntity.content }} />
            <dt>
              <span id="date">
                <Translate contentKey="jhipsterBlogApp.entry.date">Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={entryEntity.date} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <Translate contentKey="jhipsterBlogApp.entry.blog">Blog</Translate>
            </dt>
            <dd>{entryEntity.blog ? entryEntity.blog.name : ''}</dd>
            <dt>
              <Translate contentKey="jhipsterBlogApp.entry.tag">Tag</Translate>
            </dt>
            <dd>
              {entryEntity.tags
                ? entryEntity.tags.map((val, i) => (
                    <span key={val.id}>
                      <a>{val.name}</a>
                      {i === entryEntity.tags.length - 1 ? '' : ', '}
                    </span>
                  ))
                : null}
            </dd>
          </dl>
          <Button tag={Link} to="/entity/entry" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/entry/${entryEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ entry }: IRootState) => ({
  entryEntity: entry.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryDetail);
