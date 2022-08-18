import Image from 'next/image'
import { FC } from 'react'
import IPost from '../../models/IPost'
import styles from './PostItem.module.css'

const PostItem: FC<IPost> = ({ title, description, image }) => {
    return (
        <div className={styles.post}>
            <div className={styles.logo}>
                <Image src={image} alt="Pic" width={64} height={64} />
            </div>
            <div className={styles.textSection}>
                <span className={styles.textSection__title}> {title} </span>
                <p className={styles.textSection__description}> {description} </p>
            </div>
        </div>
    )
}

export default PostItem
