import React from 'react'
import PropTypes from 'prop-types'
import styles from './statistics.module.css'

function Statistics({ stats ,title}) {
    const isTitle = title !== undefined;
    
    return (
        <section className={styles.statistics}>
            {isTitle && (<h2 className={styles.title}>{title}</h2>)}
            <ul className={styles.statList}>

                    {stats.map(({ id, label, percentage }) => {
                        return (
                            <li key={id} className={styles.item}>
                                <span className={styles.label}>{ label}</span>
                                <span className={styles.percentage}>{percentage }%</span>
                            </li>)
                    })}
                
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
})),
}

export default Statistics

