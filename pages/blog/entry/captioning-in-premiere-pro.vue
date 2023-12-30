<template>
  <NuxtLayout name="blog">
    <p>
      If you've ever tried to do anything remotely fancy with subtitles in Premiere Pro, such as
      formatting your text or displaying multiple subtitles at once, you've probably figured out
      that none of your fancy features work on YouTube. Your second subtitle track is nowhere to be
      seen and your italics all look &lt;i&gt;like this.&lt;/i&gt; What's happening!?
    </p>
    <p>
      The answer is complicated. The main problem is that Premiere Pro only supports exporting in
      the <b>SubRip (.srt)</b> format, a basic format which lacks in text formatting features.
      Although Premiere Pro does support exporting some formatting information, YouTube lacks
      support for processing it. Additionally, Premiere Pro assumes all your subtitle tracks
      represent different languages, ignoring the modern use cases of overlapping speaker subtitles
      and music notifications, and thus does not allow you to merge subtitle tracks in your export.
    </p>
    <p>
      The TL;DR of my solution is to simply import the subtitles into a more capable subtitling
      software, Aegisub. While you could fully write your subtitles in Aegisub, I personally find a
      lot of value in having subtitles directly on my timeline, not to mention the time-saver that
      is auto-transcription.
    </p>
    <p>
      So, without further ado, here is my exhaustive tutorial from zero to fully stylized YouTube
      subtitles.
    </p>
    <h2>Creating Captions</h2>
    <ol>
      <li>
        Enable <b>Window -> Captions</b> and <b>Window -> Essential Graphics</b>
      </li>
      <li>
        For scripted content, select <b>Import captions from file</b> and upload your transcript.
        Otherwise, click <b>Create captions from transcript</b> to auto-transcribe the video.
        Enable speaker labels if appropriate and click OK then wait.
      </li>
      <li>
        Refine caption contents by double clicking on them in the <b>Captions</b> window,
        or in the program monitor.
      </li>
      <li>
        Use the <b>Essential Graphics</b> window to apply formatting changes.
        Note that doing so will complicate the export process,
        and only a small selection of changes will work
        (namely Faux Italics, Faux Bold, and Fill Color).
        To apply changes to individual characters,
        select the text you want to edit in the program monitor,
        not the Captions window.
      </li>
      <li>
        Refine the durations of captions on your timeline like any other source.
      </li>
      <li>
        If you wish to have multiple captions active at once
        (i.e. for overlapping speakers, or a music indicator, etc.)
        then you must create a new subtitle track by right clicking
        on <b>Subtitle</b> on your timeline and clicking <b>Add track</b>.
        Note again that this will complicate the export process.
      </li>
    </ol>
    <h2 id="exporting">Exporting</h2>
    <h3 id="exporting-basic">Basic</h3>
    <p>
      If your video just has a single caption track without text formatting, then on the
      <b>Export</b> tab you just have to enable <b>Captions</b> and set <b>Export Options</b>
      to <b>Create Sidecar File</b>. That's it, you're done!
    </p>
    <h3 id="exporting-intermediate">Intermediate</h3>
    <ol>
      <li>Follow the <i>Basic</i> steps</li>
      <li>
        If you used text formatting, then ensure <b>Include SRT Styling</b> is enabled on the
        <b>Export</b> tab.
      </li>
      <li>
        To export additional subtitle tracks, make one visible on your timeline then go into the
        <b>Captions</b> window and select <b>Hamburger Menu -> Export -> Export to SRT file...</b>
      </li>
      <li>Download <b><a href="https://aegisub.org/downloads/">Aegisub</a></b></li>
      <li>Drag and drop one of the exported subtitle tracks onto Aegisub</li>
      <li>Convert the track to ASS format with <b>File -> Save Subtitles as...</b></li>
      <li>
        If you used multiple subtitle tracks:
        <ol type="a">
          <li>
            Drag and drop one of the other exported subtitle tracks onto Aegisub,
            select every line, and press Ctrl+C
          </li>
          <li>Return to the .ass file and press Ctrl+V (and Ctrl+S to save)</li>
          <li>Repeat as necessary with other subtitle tracks</li>
        </ol>
      </li>
      <li><i>
        [Here I originally suggested exporting to <b>.stl</b> but it does not seem to be
        as well-supported as I thought, so you'll need to follow
        the</i> Advanced <i>section instead for now.]
      </i></li>
    </ol>
    <h3 id="exporting-advanced">Advanced</h3>
    <p>
      On top of basic text formatting, the advanced export (for YouTube only!) allows you to
      fine-tune the visual display of the subtitles (font/background/shadow/glow), write karaoke
      text, transparent text, etc. View the full list of supported features
      <a href="https://github.com/arcusmaximus/YTSubConverter#ass-feature-support">here</a>.
    </p>
    <ol>
      <li>Follow the <i>Intermediate</i> steps (skipping the .stl export)</li>
      <li>
        Download and open
        <a href="https://github.com/arcusmaximus/YTSubConverter/releases/tag/1.6.3">YTSubConverter</a>
      </li>
      <li>
        Note that the app will try to mimic the Aegisub preview as closely as possible, meaning by
        default it will not have any background like standard YouTube subtitles.
        If you want to add a transparent background:
        <ol type="a">
          <li>Go to <b>Subtitle -> Style Manager</b></li>
          <li>Select <b>Default</b> on the right and click <b>Edit</b></li>
          <li>Enable <b>Opaque box</b> and set <b>Shadow</b> to 0</li>
          <li>Click <b>OK</b> and <b>Close</b></li>
          <li>Go to <b>Automation -> Automation...</b></li>
          <li>
            Download
            <a href="https://gist.github.com/qixils/7fb8f74ad53220550b7a3ad4259c999c">this script</a>
            (click <b>Raw</b> and then right click -> <b>Save Page As...</b>)
          </li>
          <li>In Aegisub, click <b>Add</b>, then select the script</li>
          <li>Click <b>Close</b></li>
          <li>Select all lines of text then click <b>Automation -> Add BG transparency</b></li>
          <li>Remember Ctrl+S to save!</li>
        </ol>
      </li>
      <li>Drag and drop the <b>.ass</b> file onto the app and click <b>Convert</b></li>
    </ol>
    <h2 id="aegisub-tips">Aegisub Tips</h2>
    <h3 id="aegisub-styles">Styles</h3>
    <p>
      Styles are used to apply consistent formatting changes across like lines of text, such as
      changing the font, color, position on the screen, margins, etc. Styles are managed under
      <b>Subtitle -> Styles Manager...</b>. The section on the right contains the styles and
      settings for your current subtitle file. You can click <b>New</b> to create a new one or
      <b>Edit</b> to edit an existing one.
    </p>
    <p>
      To apply a style, select it in the style dropdown above the text field
      (<a href="https://i.qixils.dev/aegisub-apply-style.png">example</a>).
      This can be done with multiple selected lines to change them all at once.
    </p>
    <h2 id="uploading">Uploading to YouTube</h2>
    <ol>
      <li>Open <a href="https://studio.youtube.com/">YouTube Studio</a> and select the video to edit</li>
      <li>Go to the <b>Subtitles</b> tab on the left</li>
      <li>Click ✏️ <b>Add</b> in the <b>Subtitles</b> column next to the appropriate language</li>
      <li>Click <b>Upload file</b> and press <b>Continue</b></li>
      <li>Select your subtitle file (<b>.ytt</b> / <b>.srt</b>)</li>
      <li>Click <b>Publish</b></li>
    </ol>
  </NuxtLayout>
</template>
