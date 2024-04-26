import { type FC } from "react"
import { Folder, File, ChevronRight } from "lucide-react"
import { SkillTreeItemIconType, type SkillTree } from "content/skills"

type SkillsTreeProps = {
  className: string
  items: SkillTree[]
}

const getIconData = (type: SkillTreeItemIconType) => {
  return type === SkillTreeItemIconType.Folder
    ? { Icon: Folder, iconClassName: 'text-blue-400' }
    : { Icon: File, iconClassName: 'text-primary/60' }
}

export const SkillsTree: FC<SkillsTreeProps> = ({
  className,
  items,
}) => {
  if (!items.length) {
    return null
  }

  const renderItem = (item: SkillTree, depth = 0) => {
    const { Icon, iconClassName } = getIconData(item.iconType)
    const gapClass = depth > 0 ? item.items?.length > 0 ? 'ml-6' : 'ml-12' : ''

    return (
      <div
        key={item.name}
        className={`flex flex-col gap-2 ${gapClass}`}
      >
        <div className="flex items-center gap-3 group">
          {depth > 0 && item.items && <ChevronRight size={14} className="text-primary/40" />}
          <Icon
            size={18}
            className={`${iconClassName} flex-shrink-0`}
          />
          {
            item.url
             ? <a className="text-white font-mono hover:text-blue-500" href={item.url} target="_blank">{item.name}</a>
             : <span className="text-white font-mono">{item.name}</span>
          }
          {item.description && (
            <span className="text-white text-sm hidden md:inline-block">
              # {item.description}
            </span>
          )}
        </div>
        {item.items?.map((subItem) => renderItem(subItem, depth + 1))}
      </div>
    )
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item) => renderItem(item))}
    </div>
  )
}
