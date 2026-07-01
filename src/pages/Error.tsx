import { useNavigate } from 'react-router';
import { STYLES } from '../styles/theme'
import { Compass } from 'lucide-react';
import type { TranslationType } from '../data/language';

interface ErrorProps {
  t: TranslationType['errorMsg'];
};

const Error = ({t}: ErrorProps) => {

    const navigate = useNavigate();

    return (
        <section className={`${STYLES.mainCard} flex flex-col justify-center items-center`}>
            <div className={STYLES.errorWrapper}>
                <Compass className={STYLES.errorIcon}/>

                <h1 className={STYLES.errorTitle}>{t.title}</h1>

                <p className={STYLES.errorDescription}>
                    {t.description}
                </p>

                <button
                    className={STYLES.errorButton}
                    onClick={() => navigate('/')}
                >
                    {t.button}
                </button>
            </div>
        </section>
    )
}

export default Error