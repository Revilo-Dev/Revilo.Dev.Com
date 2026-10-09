import PrivacyPolicyLayout from './PrivacyPolicyLayout.jsx';

const sections = [{"id":"about-onewidget","title":"About OneWidget"},{"id":"device-and-system-information","title":"Device and System Information"},{"id":"calendar-information","title":"Calendar Information"},{"id":"activity-and-step-information","title":"Activity and Step Information"},{"id":"media-information","title":"Media Information"},{"id":"weather-and-location","title":"Weather and Location"},{"id":"widget-settings","title":"Widget Settings"},{"id":"preview-images-and-sharing","title":"Preview Images and Sharing"},{"id":"external-applications-and-services","title":"External Applications and Services"},{"id":"advertising-and-analytics","title":"Advertising and Analytics"},{"id":"permissions","title":"Permissions"},{"id":"data-sharing","title":"Data Sharing"},{"id":"data-retention-and-deletion","title":"Data Retention and Deletion"},{"id":"security","title":"Security"},{"id":"developer-mode","title":"Developer Mode"},{"id":"children-s-privacy","title":"Children's Privacy"},{"id":"changes-to-this-privacy-policy","title":"Changes to This Privacy Policy"},{"id":"contact","title":"Contact"}];

function OneWidgetPrivacyPolicy() {
  return (
    <PrivacyPolicyLayout app="OneWidget" icon="/assets/OneWidgets.png" summary="How OneWidget handles widget information, permissions, and local storage." date="Effective date: 10 September 2026" sections={sections}>
        <section className="mb-6">
          <p className="mt-3">This Privacy Policy explains how OneWidget ("the App") handles information when you use its Android applications, widgets, and related features.</p>
          <p className="mt-3">The App is developed by ReviloDev.</p>
          <p className="mt-3">For privacy questions, contact:</p>
          <p className="mt-3">Email: <a className="link link-primary" href="mailto:revilo2.dev@gmail.com">revilo2.dev@gmail.com</a></p>
          <p className="mt-3">Developer: ReviloDev</p>
        </section>
        <section id="about-onewidget" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">About OneWidget</h2>
          <p className="mt-3">OneWidget is an Android widget application that provides customisable home-screen and compatible lock-screen widgets.</p>
          <p className="mt-3">The App is designed to process most information locally on your device. We do not sell your personal information.</p>
          <p className="mt-3">Unless stated otherwise below, information used to display widgets is processed on your device and is not transmitted to the developer.</p>
          <p className="mt-3">The App currently does not require users to create an account.</p>
        </section>
        <section id="device-and-system-information" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Device and System Information</h2>
          <p className="mt-3">The information accessed depends on which widgets and features you choose to use.</p>
          <p className="mt-3">Some widgets may access information provided by Android, including:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>current date and time;</li>
          <li>battery percentage and charging status;</li>
          <li>available and used device storage;</li>
          <li>device display and widget dimensions;</li>
          <li>system theme, light/dark mode and appearance settings;</li>
          <li>alarm or clock information where permitted by Android; and</li>
          <li>general device information required for compatibility and widget rendering.</li>
          </ul>
          <p className="mt-3">This information is primarily processed locally to display the selected widget.</p>
        </section>
        <section id="calendar-information" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Calendar Information</h2>
          <p className="mt-3">If you choose to use a calendar or upcoming-event widget, the App may request permission to access calendar information stored on your device.</p>
          <p className="mt-3">This may include:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>event titles;</li>
          <li>dates and times;</li>
          <li>calendar names; and</li>
          <li>upcoming event information.</li>
          </ul>
          <p className="mt-3">Calendar access is used only to provide calendar-related features.</p>
          <p className="mt-3">The App does not require calendar permission for widgets that do not use calendar information.</p>
        </section>
        <section id="activity-and-step-information" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Activity and Step Information</h2>
          <p className="mt-3">If you use a step-counting or activity-related widget, the App may access activity or step information made available through Android, subject to the permissions required by your Android version.</p>
          <p className="mt-3">This information is used to display the requested activity information in the widget.</p>
        </section>
        <section id="media-information" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Media Information</h2>
          <p className="mt-3">Media-related widgets may access information about media currently playing on your device where Android permits it.</p>
          <p className="mt-3">This may include:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>track or media title;</li>
          <li>artist or source;</li>
          <li>playback status;</li>
          <li>album artwork; and</li>
          <li>media playback controls.</li>
          </ul>
          <p className="mt-3">Some Android versions may require notification or media-session access for these features.</p>
          <p className="mt-3">The App uses this information to display and control media on your device.</p>
        </section>
        <section id="weather-and-location" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Weather and Location</h2>
          <p className="mt-3">If a weather feature uses your location, the App may request location permission or allow you to provide a location manually.</p>
          <p className="mt-3">Location information is used only to obtain weather information for the location you select.</p>
          <p className="mt-3">If weather information is obtained from an external weather provider, a request may be transmitted to that provider. The provider may receive technical information normally associated with an internet request, such as your IP address.</p>
        </section>
        <section id="widget-settings" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Widget Settings</h2>
          <p className="mt-3">The App stores settings required to configure your widgets.</p>
          <p className="mt-3">These may include:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>selected widget type;</li>
          <li>widget size;</li>
          <li>layout preferences;</li>
          <li>colours and appearance;</li>
          <li>font selection;</li>
          <li>alignment;</li>
          <li>visible or hidden widget elements;</li>
          <li>widget configuration; and</li>
          <li>other customisation preferences.</li>
          </ul>
          <p className="mt-3">These settings are stored locally on your device using Android application storage.</p>
          <p className="mt-3">They are not used to create an advertising or marketing profile.</p>
        </section>
        <section id="preview-images-and-sharing" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Preview Images and Sharing</h2>
          <p className="mt-3">The App may create widget preview images or snapshots so that widgets can be displayed accurately within the application.</p>
          <p className="mt-3">These preview files may be stored in the App&#39;s private local storage.</p>
          <p className="mt-3">Developer features may also allow a preview image to be exported using Android&#39;s secure file-sharing system.</p>
          <p className="mt-3">A file is only shared when you deliberately use an export or share function.</p>
        </section>
        <section id="external-applications-and-services" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">External Applications and Services</h2>
          <p className="mt-3">The App may include widgets that open external applications or initiate searches using services such as web browsers, search providers, or video applications.</p>
          <p className="mt-3">When you select such a shortcut, you may leave OneWidget and interact directly with another application or service.</p>
          <p className="mt-3">Information you provide to that third-party application or service is governed by that provider&#39;s privacy policy.</p>
          <p className="mt-3">OneWidget does not control the privacy practices of external applications or websites.</p>
        </section>
        <section id="advertising-and-analytics" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Advertising and Analytics</h2>
          <p className="mt-3">The current version of OneWidget does not intentionally send the developer personal information for advertising, profiling, or analytics purposes.</p>
          <p className="mt-3">In particular, the App currently does not include:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>advertising SDKs;</li>
          <li>behavioural advertising;</li>
          <li>developer-operated user accounts;</li>
          <li>developer-operated analytics;</li>
          <li>sale of personal information; or</li>
          <li>sale of device information.</li>
          </ul>
          <p className="mt-3">Information accessed solely on the device to provide widget functionality is generally kept on the device.</p>
          <p className="mt-3">Google distinguishes data processed only on-device from data transmitted off the device when completing its Data Safety disclosures.</p>
          <p className="mt-3">If analytics, advertising, crash reporting, cloud synchronisation, or other external services are added in a future release, this Privacy Policy will be updated before those features are released.</p>
        </section>
        <section id="permissions" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Permissions</h2>
          <p className="mt-3">The App only requests Android permissions required for features you choose to use.</p>
          <p className="mt-3">Depending on your device and selected widgets, these may include permission to access:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>calendar information;</li>
          <li>physical activity or step information;</li>
          <li>notifications or media sessions;</li>
          <li>location; or</li>
          <li>other Android system functionality required by a particular widget.</li>
          </ul>
          <p className="mt-3">Where Android provides a runtime permission prompt, you can deny that permission.</p>
          <p className="mt-3">If a permission is denied, the related widget may provide reduced functionality or may be unavailable, while unrelated widgets should continue to operate.</p>
          <p className="mt-3">You can review or revoke permissions through:</p>
          <p className="mt-3">Android Settings &rarr; Apps &rarr; OneWidget &rarr; Permissions</p>
        </section>
        <section id="data-sharing" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Data Sharing</h2>
          <p className="mt-3">We do not sell personal information.</p>
          <p className="mt-3">We do not share locally processed widget information with advertisers.</p>
          <p className="mt-3">Information may leave your device only where required to provide a feature that communicates with an external service, or when you deliberately initiate an external action.</p>
          <p className="mt-3">Examples may include:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>requesting weather information from a weather provider;</li>
          <li>opening a web search;</li>
          <li>opening a third-party application;</li>
          <li>sharing or exporting a widget image; or</li>
          <li>another feature you explicitly initiate.</li>
          </ul>
          <p className="mt-3">Third-party services may process information according to their own privacy policies.</p>
        </section>
        <section id="data-retention-and-deletion" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Data Retention and Deletion</h2>
          <p className="mt-3">Widget preferences and locally generated application data are stored on your device for as long as they are needed to provide the App&#39;s functionality.</p>
          <p className="mt-3">Depending on the feature, removing a widget may remove settings associated with that widget.</p>
          <p className="mt-3">You can remove locally stored application data by:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>deleting relevant widgets or saved information where the App provides that option;</li>
          <li>clearing the App&#39;s storage through Android Settings; or</li>
          <li>uninstalling the App.</li>
          </ul>
          <p className="mt-3">Uninstalling the App generally removes its private application data from your device, subject to Android&#39;s normal backup and restore behaviour.</p>
        </section>
        <section id="security" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Security</h2>
          <p className="mt-3">We use Android&#39;s application storage and permission systems to limit access to locally stored information.</p>
          <p className="mt-3">Files intended to remain private are stored in app-private storage.</p>
          <p className="mt-3">Where the App allows files to be shared, Android-compatible secure content-sharing mechanisms are used rather than exposing private filesystem paths.</p>
          <p className="mt-3">No method of electronic storage or communication can be guaranteed to be completely secure.</p>
        </section>
        <section id="developer-mode" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Developer Mode</h2>
          <p className="mt-3">The App may contain a Developer Mode intended for application development, widget testing, layout editing, and preview generation.</p>
          <p className="mt-3">Developer Mode may store:</p>
          <ul className="list-disc pl-6 my-3 space-y-1">
          <li>widget design specifications;</li>
          <li>widget preview snapshots;</li>
          <li>test-widget settings;</li>
          <li>technical device compatibility information; and</li>
          <li>widget verification information.</li>
          </ul>
          <p className="mt-3">This information is stored locally and is used for development and testing purposes.</p>
          <p className="mt-3">The Developer Mode access code is a convenience mechanism and is not intended to protect sensitive personal information.</p>
        </section>
        <section id="children-s-privacy" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Children&#39;s Privacy</h2>
          <p className="mt-3">OneWidget is not designed specifically to collect personal information from children.</p>
          <p className="mt-3">The App does not knowingly use children&#39;s information for advertising or profiling.</p>
          <p className="mt-3">If the App is distributed to children or included in Google&#39;s Families program, additional requirements may apply and this policy will be updated where necessary.</p>
        </section>
        <section id="changes-to-this-privacy-policy" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Changes to This Privacy Policy</h2>
          <p className="mt-3">We may update this Privacy Policy when the App&#39;s features, permissions, data practices, or legal requirements change.</p>
          <p className="mt-3">The revised policy will display an updated effective date.</p>
          <p className="mt-3">Material changes affecting how user data is handled will be disclosed as required.</p>
        </section>
        <section id="contact" className="mb-6">
          <h2 className="text-primary text-2xl font-bold mb-3">Contact</h2>
          <p className="mt-3">For questions, requests, or concerns about this Privacy Policy or OneWidget&#39;s privacy practices, contact:</p>
          <p className="mt-3">Developer: ReviloDev</p>
          <p className="mt-3">Email: <a className="link link-primary" href="mailto:revilo2.dev@gmail.com">revilo2.dev@gmail.com</a></p>
          <p className="mt-3">Country: Australia</p>
        </section>
    </PrivacyPolicyLayout>
  );
}

export default OneWidgetPrivacyPolicy;
