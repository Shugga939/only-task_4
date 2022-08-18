import type { NextApiRequest, NextApiResponse } from 'next'
import IMockData from '../../models/IMockData'
import IOptions from '../../models/IOptions'
import IPost from '../../models/IPost'

const mockPosts: IPost[] = [
    {
        id: 1,
        title: 'Post 1',
        description: 'С другой стороны реализация намеченных плановых заданий требуют от нас анализа форм развития',
        image: 'https://cdn.dribbble.com/users/239755/screenshots/2507095/media/3211ed809bbfc5fd058c0399eba3cc7e.png',
    },
    {
        id: 3,
        title: 'Post 3',
        description: 'Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции способствует подготовки и реализации системы обучения кадров',
        image: 'https://i.pinimg.com/564x/fe/f5/84/fef584517b548c505bf360abadfdf8f1.jpg',
    },
    {
        id: 2,
        title: 'Post 2',
        description: 'С другой стороны постоянный количественный рост и сфера нашей активности способствует подготовки и реализации соответствующий условий активизации',
        image: 'https://external-preview.redd.it/VWrM2IrTB26KZm3b_bQL0ZLeZWfhWfgx1Mj5iOSgPe0.png?auto=webp&s=16aedaad09afab1a43abf2d3314517a4917f14a5',
    },
    {
        id: 5,
        title: 'Post 5',
        description: 'Задача организации, в особенности же новая модель организационной деятельности требуют от нас анализа модели развития',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoumUhpEiSAkbD-EvptXYey4Cc_6ojftp9A&usqp=CAU',
    },
    {
        id: 4,
        title: 'Post 4',
        description: 'Товарищи! постоянный количественный рост и сфера нашей активности требуют от нас анализа систем массового участия.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLZNDesqvyPdiUAxez0IZzpHIGkcwraPFnFA&usqp=CAU',
    },
]

const mockOptions: IOptions = {
    sort: 'ASC',
    filter: {
        name: 'description',
        value: ''
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<IMockData>
) {
    res.status(200).json({ posts: mockPosts, options: mockOptions })
}
