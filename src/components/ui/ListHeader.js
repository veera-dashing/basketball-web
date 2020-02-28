import React from 'react';

export const ListHeader = ({ list }) => {
    if (!list) {
        return <></>
    }
    return (
        <thead>
            <tr>{
                list && list.map((item) => {
                    console.log('item----------', item)
                    if (item.link) {
                        return (
                            <td className={item.className} style={item.style} onClick={item.onClick} key={item.label}> {item.label} </td>)
                    } else {
                        return (<td className={item.className} style={item.style} key={item.label}> {item.label} </td>)
                    }

                })}
            </tr>
        </thead>

    )
}
