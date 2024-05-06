import React from 'react'


import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
type Props = {
select: string
}
const SelectStage = (props: Props) => {
const [select, setSelect] = React.useState(props.select);
return (
<Select onValueChange={(value) => { setSelect(value) }} value={select} >
<h1>{select}</h1>
<SelectTrigger>
<SelectValue placeholder="Стадия задачи" />
</SelectTrigger>
<SelectContent className=' bg-violet-300'>
<SelectItem value="Готово">Готово</SelectItem>
<SelectItem value="В процессе">В процессе</SelectItem>
<SelectItem value="В обсуждении">В обсуждении</SelectItem>
</SelectContent>

</Select>
)
}

export default SelectStage
