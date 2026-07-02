import { useContent } from '../context/ContentContext'

export default function Editable({ path, as: Tag = 'span', className = '' }) {
  const { getValue, updateField, editMode } = useContent()
  const value = getValue(path)

  if (!editMode) {
    return <Tag className={className}>{value}</Tag>
  }

  return (
    <Tag
      className={`${className} rounded outline-dashed outline-1 outline-offset-2 outline-purple-300 hover:outline-purple-500 focus:outline-2 focus:outline-purple-600`}
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => updateField(path, e.currentTarget.textContent)}
    >
      {value}
    </Tag>
  )
}
