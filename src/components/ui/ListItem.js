import React from 'react';


export const ListItem = ({data, additionalInfo, actionButtons}) => {
    if (!data) {
        return <></>
    }
    return (
        <tbody>
        {data.map((item, index) => {
                return (<tr key={index}>
                        {
                            Object.keys(item).map((key) => {
                                if (additionalInfo[key].onClick) {
                                    return (<td className={additionalInfo[key].className}  key={item[key]}
                                                style={additionalInfo[key].style ? additionalInfo[key].style : {}}
                                                onClick={() => additionalInfo[key].onClick(item[additionalInfo[key]['key']])}> {item[key]} </td>)
                                } else {
                                    return (<td className={additionalInfo[key].className} key={item[key]}
                                                style={additionalInfo[key].style ? additionalInfo[key].style : {}}> {item[key]} </td>)
                                }

                            })
                        }
                        <td>
                            {actionButtons && actionButtons.map((action) => (
                                <button key={action.key}
                                    onClick={() => action.onClick(item[action.label])}>{action.label}</button>)
                            )
                            }

                        </td>

                    </tr>


                )
            }
        )
        }
        </tbody>)
}

