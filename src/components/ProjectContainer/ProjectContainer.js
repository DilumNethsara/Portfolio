import uniqid from 'uniqid'
import { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false)
  const imageUrl = project.image?.startsWith('http')
    ? project.image
    : `${process.env.PUBLIC_URL}/images/${project.image}`

  useEffect(() => {
    if (!isImagePreviewOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsImagePreviewOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isImagePreviewOpen])

  return (
    <>
      <article className='project'>
        {project.image && (
          <div className='project__image-wrapper'>
            <button
              type='button'
              className='project__image-button'
              onClick={() => setIsImagePreviewOpen(true)}
              aria-label={`Preview ${project.name} screenshot`}
            >
              <img
                className='project__image'
                src={imageUrl}
                alt={`${project.name} screenshot`}
              />
            </button>
            {(project.live || project.group) && (
              <div className='project__badges'>
                {project.live && <span>Live Project</span>}
                {project.group && <span>Group Project</span>}
              </div>
            )}
          </div>
        )}

        <h3>{project.name}</h3>

        <p className='project__description'>{project.description}</p>
        {project.stack && (
          <ul className='project__stack'>
            {project.stack.map((item) => (
              <li key={uniqid()} className='project__stack-item'>
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )}
      </article>

      {isImagePreviewOpen && (
        <div
          className='project__image-preview'
          role='dialog'
          aria-modal='true'
          aria-label={`${project.name} screenshot preview`}
          onClick={() => setIsImagePreviewOpen(false)}
        >
          <button
            type='button'
            className='project__image-preview-close'
            onClick={() => setIsImagePreviewOpen(false)}
            aria-label='Close image preview'
          >
            &times;
          </button>
          <img
            className='project__image-preview-img'
            src={imageUrl}
            alt={`${project.name} screenshot full size`}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}

export default ProjectContainer
