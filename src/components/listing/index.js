import * as React from 'react'
import { Link } from '@reach/router'
import classnames from 'classnames'

import styles from './styles.css'

function Listing({ listing }) {
  const { id, image, title, address, description } = listing
  const columnClasses = classnames('column', 'col-4', 'col-xs-12', styles.column)

  return (
    <div className={columnClasses}>
      <div className="card">
        <div className="card-image">
          <img className="img-responsive" src={`/server/${image}`} alt={address} />
        </div>
        <div className="card-header">
          <div className="card-title h5">{title}</div>
          <div className="card-subtitle text-gray">{address}</div>
        </div>
        <div className="card-body">{description}</div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/details/${id}`}>
            Go to property
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Listing
