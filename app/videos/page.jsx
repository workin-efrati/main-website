// "use client"

import Image from 'next/image'
import style from './style.module.scss'
function page() {
const videos = ["https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/","https://transform.nws.ai/https%3A//delivery.gettyimages.com/downloads/670151598%3Fk%3D6%26e%3Dgki8j3-NUdYEDj0sM-NjU0zsESSoMz8Y2b68PFZPbV0O7iv1qNyb5I_ou5slOcj0-CrB2c5IeF527eNEmju0y4lHM4rMRiD-a_HZCGqkFh8%3D/w_1200,c_limit/"] // enter videos here
    return (<>
        <div className={style.page}>
            <div className={style.relative}>
                <div className={style.holdVideos}>
                {videos.map(i =>
                <Image
                    key={i}
                    alt="asd"
                    width={400}
                    height={300}
                    className={style.image}
                    src={i}
                    />
                )}
                </div>
            </div>
        </div>
    </>)
}
export default page